var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);
//Aplicacion de luz 
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

var colorC1 = 0x4404f6;
var colorC2 = 0x4F9543;
var colorC3 = 0x84B342;

var controls = new THREE.OrbitControls(camera, renderer.domElement);
//Se parametriza como variables globales l
//l: Lado del cubo 

l=1;

// Gemotria de los Cubos 
var geometryC1 = new THREE.BoxGeometry(l, 5, l);

//Materiales de los Cubos
var materialC1 = new THREE.MeshPhongMaterial(colorC1);
//var materialC2 = new THREE.MeshPhongMaterial(colorC2);

//Representacion de los Cubos
var cubo1 = new THREE.Mesh(geometryC1, materialC1);
//var cubo2 = new THREE.Mesh(geometryC2, materialC2);

//Se agrega a la escena cada cubo
scene.add(cubo1)
//scene.add(cubo2)





const size = 150;
const divisions = 160;
//Creación de ejes
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

//Creacion de la grilla
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//Funcion para renderizar
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();