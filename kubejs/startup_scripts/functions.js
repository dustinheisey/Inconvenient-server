global.toTitleCase = (string) =>
    string
        .split("_")
        .map((it) => Utils.toTitleCase(it))
        .join(" ");
