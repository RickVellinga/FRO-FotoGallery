
let objectArray = [];

function ImageObject(name, description) {
  let imgObj = this;
  imgObj.name = name;
  imgObj.description = description;
  console.log(name);
}

function createObjects() {
 for (let counter = 0; counter < fotogallerij.length; counter++) {
    objectArray.push(new ImageObject(fotogallerij[counter], counter));
  }
}

function plaatsEenFoto(url) {
  let item = document.createElement('div');
  item.className = 'item';
  let deFoto = document.createElement('img');
  deFoto.src = url;
  deFoto.alt = 'Sydney';
  deFoto.title = 'Sydney';
  item.append(deFoto);
  houder.append(item);
}

for (let i=fotogallerij.length; i>0; i--) {
  let getalletje = Math.floor(Math.random()*fotogallerij.length);
  plaatsEenFoto(fotogallerij[getalletje]);
  fotogallerij.splice(getalletje,1);
}


createObjects();
