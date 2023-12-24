function recipes(event) {
  this.event = event;
  this.type = '';
  this.stage = undefined;
  this.function = undefined;
}

recipes.prototype = {
  setType: function (type) {
    this.type = type;
    return this;
  },
  setFunction: function (func) {
    this.function = func;
    return this;
  },
  setStage: function (stage) {
    this.stage = stage;
    return this;
  },
  removeInputs: function (list) {
    list.forEach(id => {
      try {
        let config = {input: id};
        if (this.type) config.type = this.type;
        this.event.remove(config);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeOutputs: function (list) {
    list.forEach(id => {
      try {
        let config = {output: id};
        if (this.type) config.type = this.type;
        this.event.remove(config);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeIds: function (list) {
    list.forEach(id => {
      try {
        this.event.remove({id: id});
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeCraftingInputs: function (list) {
    list.forEach(id => {
      try {
        this.event.remove({
          output: id,
          or: [
            {type: 'minecraft:crafting_shaped'},
            {type: 'minecraft:crafting_shapeless'},
          ],
        });
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeCraftingOutputs: function (list) {
    list.forEach(id => {
      try {
        this.event.remove({
          output: id,
          or: [
            {type: 'minecraft:crafting_shaped'},
            {type: 'minecraft:crafting_shapeless'},
          ],
        });
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeConfigs: function (list) {
    list.forEach(config => {
      try {
        this.event.remove(config);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  replaceInput: function (list) {
    list.forEach(config => {
      try {
        this.event.replaceInput(
          config.target || undefined,
          config.to_replace,
          config.replace_with
        );
      } catch (error) {
        console.error(error);
      }
    });
  },
  replaceOutput: function (list) {
    list.forEach(config => {
      try {
        this.event.replaceOutput(
          config.target || undefined,
          config.to_replace,
          config.replace_with
        );
      } catch (error) {
        console.error(error);
      }
    });
  },
  modifyInputs: function (list) {
    list.forEach(item => {
      try {
        let config = {input: item.input};
        if (!item.global) config.type = this.type;

        this.event.remove(config);
        if (this.stage) this.function(item).stage(this.stage);
        else this.function(item);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  modifyOutputs: function (list) {
    list.forEach(item => {
      try {
        let config = {output: item.output};
        if (!item.global) config.type = this.type;

        this.event.remove(config);
        if (this.stage) this.function(item).stage(this.stage);
        else this.function(item);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  add: function (list) {
    list.forEach(item => {
      try {
        if (this.stage) this.function(item).stage(this.stage);
        else this.function(item);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
};

function tags(event) {
  this.event = event;
}

tags.prototype = {
  removeTag: function (tag, item) {
    this.event.remove(tag, item);
    return this;
  },
  removeTags: function (tags, item) {
    tags.forEach(tag => this.event.remove(tag, item));
    return this;
  },
  removeItems: function (tag, items) {
    items.forEach(item => this.event.remove(tag, item));
    return this;
  },
  addTag: function (tag, item) {
    this.event.add(tag, item);
    return this;
  },
  addItems: function (tag, items) {
    items.forEach(item => this.event.add(tag, item));
    return this;
  },
  replaceTag: function (tag, item) {
    this.event.removeAll(tag);
    this.event.add(tag, item);
    return this;
  },
  replaceTags: function (tags, item) {
    tags.forEach(tag => {
      this.event.removeAll(tag);
      this.event.add(tag, item);
    });
    return this;
  },
};

function addJSON(event, stage, config, id, parent_id) {
  let json_id =
    id === 'root'
      ? `im:advancements/${stage}/root.json`
      : `im:advancements/${stage}/${config.id || id}.json`;
  let json = {};

  if (!config.hide) {
    json.display = {
      icon: {
        item: config.icon || config.item,
        nbt: config.nbt,
      },
      title: config.title,
      description: config.description || '',
      background: config.background,
      frame: config.frame || 'task',
      show_toast: true,
      announce_to_chat: false,
    };
  }

  if (config.criteria) {
    json.criteria = config.criteria;
  } else {
    json.criteria = {
      collect: {
        trigger: 'inventory_changed',
        conditions: {
          items: [],
        },
      },
    };
    if (config.items) {
      config.items.forEach(item => {
        json.criteria.collect.conditions.items.push({
          items: [item],
        });
      });
    } else if (config.tag) {
      json.criteria.collect.conditions.items.push({
        tag: config.tag,
        count: config.count,
        nbt: config.nbt,
      });
    } else {
      json.criteria.collect.conditions.items.push({
        items: [config.item] || undefined,
        count: config.count,
        nbt: config.nbt,
      });
    }
  }

  json.rewards = {
    function: config.reward || 'im:spirit_orbs',
  };

  if (config.orb === false) json.rewards = {};

  if (id !== 'root') {
    json.parent = `im:${stage}/${config.parent || parent_id}`;
  }

  event.addJson(json_id, json);
}

function addAdvancements(event, stage, config, child_id, parent_id) {
  let id = child_id || 'root';
  let parent = id;

  addJSON(event, stage, config, id, parent_id);

  if (config.children) {
    config.children.forEach(child => {
      addAdvancements(
        event,
        stage,
        child,
        id === 'root'
          ? `${config.children.indexOf(child) + 1}`
          : `${id}.${config.children.indexOf(child) + 1}`,
        parent
      );
    });
  }
}
