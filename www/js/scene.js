(function () {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000); //profundiad de camara
  let renderer = new THREE.WebGLRenderer({alpha: !true}); //Motor de renderizado
  renderer.setClearColor( 0xffffff, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  // Creacion de la figura
  //Cubo
  // let geometry = new THREE.BoxGeometry(1, 1, 1, 1);
  // let groundMaterial = new THREE.MeshPhongMaterial({
  //   wireframe: !true,
  //   color: 0xfffff
  // });
  // let cube = new THREE.Mesh(geometry, groundMaterial);
  // scene.add(cube);
  // cube.position.set(0, 2, 0);
  camera.position.z = 5;
  camera.position.y = .7;
  camera.position.x = .3;

  // let mesh;
  // let loader = new THREE.TextureLoader();

  // loader.load('public/deaths.jpg', function(texture){
  //   let geometry = new THREE.SphereGeometry(20,100,100);
  //   let material = new THREE.MeshBasicMaterial({
  //     map: texture
  //   })

  //   mesh = new THREE.Mesh(geometry, material);
  //   mesh.position.y = 0;
  //   scene.add(mesh);
  // });
//SUN
var spheregeometry = new THREE.SphereGeometry(.5, 16, 16);
var spherematerial = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture('public/sun.jpg'),
  wireframe: !true
  //color: 0x3366ff
});
var SUN = new THREE.Mesh(spheregeometry, spherematerial);
SUN.position.set(0, 2, 0);
scene.add(SUN);
  //DSTAR
  var spheregeometry = new THREE.SphereGeometry(.5, 16, 16);
  var spherematerial = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture('public/dstar.jpg'),
    wireframe: !true
    //color: 0x3366ff
  });
  var DSTAR = new THREE.Mesh(spheregeometry, spherematerial);
  DSTAR.position.set(1, -1, 0);
  scene.add(DSTAR);
  //JAKKU
  var spheregeometry2 = new THREE.SphereGeometry(.8, 16, 16);
  var spherematerial = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture('public/jakku.jpg'),
    wireframe: !true
    //color: 0x3366ff
  });
  var JAKKU = new THREE.Mesh(spheregeometry, spherematerial);
  JAKKU.position.set(4, 3, 0);
  scene.add(JAKKU);
  //ENDOR
  var spheregeometry2 = new THREE.SphereGeometry(.8, 16, 16);
  var spherematerial = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture('public/endor.jpg'),
    wireframe: !true
    //color: 0x3366ff
  });
  var ENDOR = new THREE.Mesh(spheregeometry, spherematerial);
  ENDOR.position.set(3, 0, 0);
  scene.add(ENDOR);
  //TATOOINE
  var spheregeometry2 = new THREE.SphereGeometry(.8, 16, 16);
  var spherematerial = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture('public/tatooine.jpg'),
    wireframe: !true
    //color: 0x3366ff
  });
  var TATOOINE = new THREE.Mesh(spheregeometry, spherematerial);
  TATOOINE.position.set(-1, -.5, 0);
  scene.add(TATOOINE);
  //COURSANT
  var spheregeometry2 = new THREE.SphereGeometry(.8, 16, 16);
  var spherematerial = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture('public/cours.jpg'),
    wireframe: !true
    //color: 0x3366ff
  });
  var COURSANT = new THREE.Mesh(spheregeometry, spherematerial);
  COURSANT.position.set(-3, 0, 0);
  scene.add(COURSANT);
  //NABOO
  var spheregeometry2 = new THREE.SphereGeometry(.8, 16, 16);
  var spherematerial = new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture('public/naboo.png'),
    wireframe: !true
    //color: 0x3366ff
  });
  var NABOO = new THREE.Mesh(spheregeometry, spherematerial);
  NABOO.position.set(-4, 2, 0);
  scene.add(NABOO);





  // //Cilindro
  // var cylindergeometry = new THREE.CylinderGeometry(0.6, 0.6, 2, 50, false);
  // var cylindermaterial = new THREE.MeshLambertMaterial({
  //   wireframe: !true,
  //   color: 0x9900cc
  // });
  // var cylinder = new THREE.Mesh(cylindergeometry, cylindermaterial);
  // cylinder.position.set(2.0, 3, 0);
  // scene.add(cylinder);
  // //Cono
  // var conegeometry = new THREE.CylinderGeometry(0, 0.6, 2, 50, false);
  // var conematerial = new THREE.MeshLambertMaterial({
  //   wireframe: !true,
  //   color: 0xff9966
  // });
  // var cone = new THREE.Mesh(conegeometry, conematerial);
  // cone.position.set(-2, 0, 0);
  // scene.add(cone);
  // //Pirmade
  // var pyramidgeometry = new THREE.CylinderGeometry(0, 0.8, 2, 4, false);
  // var pyramidmaterial = new THREE.MeshBasicMaterial({
  //   wireframe: !true,
  //   color: 0xcc0000
  // });
  // var pyramid = new THREE.Mesh(pyramidgeometry, pyramidmaterial);
  // pyramid.position.set(-2, 3, 0, 0);
  // scene.add(pyramid);

  //LUZ
  let pointLight = new THREE.PointLight(0x404040);
  pointLight.position.y = 500;
  scene.add(new THREE.AmbientLight(0x404040));
  scene.add(pointLight);

  //REEnderizado y animacion de fotogramas
  function loop() {
    NABOO.rotation.y += 0.01;
    DSTAR.rotation.y += -0.02;
    JAKKU.rotation.y += 0.01;
    TATOOINE.rotation.y += 0.02;
    COURSANT.rotation.y += 0.013;
    ENDOR.rotation.y += 0.01;
    SUN.rotation.y += 0.05;
     
    requestAnimationFrame(loop);
    renderer.render(scene, camera);

  }
  loop();


})();