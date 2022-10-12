pkg update && pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
pkh install unzip -y
pkg install wget -y
rm -rf node_modules
rm -rf session.data.json
wget https://www.dropbox.com/s/brxofxkatcvv1gg/node_modules.zip
unzip node_modules.zip
rm -rf node_modules.zip

echo "Semuanya sudah di install , ketik \"npm start\" untuk menjalankan hanaa bot"
