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

    var material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0xffffff, 1);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    renderer.render(scene, camera);
}
animate();
