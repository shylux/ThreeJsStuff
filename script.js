var camera, scene, renderer;
var mesh;

init();

function init() {
    scene = new THREE.Scene();

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(1, 1, 0),
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(1, 0, 1),
        new THREE.Vector3(0, 1, 1),
        new THREE.Vector3(1, 1, 1)
    );

    geometry.faces.push(
        new THREE.Face3(0, 1, 2),
        new THREE.Face3(1, 3, 2),
        new THREE.Face3(5, 4, 6),
        new THREE.Face3(5, 6, 7),
        new THREE.Face3(2, 3, 6),
        new THREE.Face3(3, 7, 6),
        new THREE.Face3(0, 4, 1),
        new THREE.Face3(1, 4, 5),
        new THREE.Face3(1, 5, 3),
        new THREE.Face3(5, 7, 3),
        new THREE.Face3(0, 2, 4),
        new THREE.Face3(2, 6, 4)
    );
    geometry.computeBoundingSphere()

    var material = new THREE.MeshPhongMaterial({
        color: 0xff0000
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    var geom_plane = new THREE.PlaneGeometry( 10, 10 );
    var mat_plane = new THREE.MeshPhongMaterial( {color: 0xff00ff} );
    var plane = new THREE.Mesh( geom_plane, mat_plane );
    plane.rotation.x = - Math.PI / 2;
    scene.add(plane);

    // Lights
    var light = new THREE.AmbientLight( 0x0000ff );
    scene.add( light );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set( 1, 1, 0 );
    scene.add(directionalLight);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var orbit = new THREE.OrbitControls( camera, renderer.domElement )
}

function animate() {
    requestAnimationFrame(animate);
    // mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();
