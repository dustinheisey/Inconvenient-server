cp -a . ../inconvenient-server

cd ../inconvenient-server

sudo rm -rf .git

rm -rf .vscode crash-reports logs .curseclient .gitignore banned-ips.json banned-players.json minecraftinstance.json ops.json usercache.json usernamecache.json whitelist.json rhino.local.properties server.properties build.sh xaerominimap.txt xaeroworldmap.txt

cd ../

zip -r inconvenient-server.zip ./inconvenient-server

rm -rf ./inconvenient-server