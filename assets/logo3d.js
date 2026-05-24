(function () {
  "use strict";

  var MODEL_URL = "assets/logo-animation.glb";

  function hasThree() {
    return Boolean(window.THREE && window.THREE.GLTFLoader);
  }

  function createChromeMaterial() {
    return new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.15
    });
  }

  function applyChromeMaterial(root) {
    var material = createChromeMaterial();
    root.traverse(function (node) {
      if (node.isMesh) {
        node.material = material;
        node.castShadow = false;
        node.receiveShadow = false;
      }
    });
  }

  function frameModel(model, targetSize) {
    var box = new THREE.Box3().setFromObject(model);
    var size = box.getSize(new THREE.Vector3());
    var center = box.getCenter(new THREE.Vector3());
    var maxDimension = Math.max(size.x, size.y, size.z) || 1;
    model.position.sub(center);
    model.scale.setScalar(targetSize / maxDimension);
    return targetSize / maxDimension;
  }

  function createRenderer(canvas, width, height) {
    var renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(width, height, false);
    renderer.setClearColor(0x000000, 0);
    return renderer;
  }

  function createScene() {
    var scene = new THREE.Scene();
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    var pointLight = new THREE.PointLight(0xc0c0c0, 0.8);

    directionalLight.position.set(3, 4, 5);
    pointLight.position.set(-2, 1.5, 3);
    scene.add(ambientLight, directionalLight, pointLight);

    return scene;
  }

  function initHeaderLogo() {
    if (window.NORVAIL_LOGO_INITIALIZED) {
      return;
    }

    var canvas = document.getElementById("logo-canvas");
    if (!canvas || !hasThree()) {
      return;
    }

    window.NORVAIL_LOGO_INITIALIZED = true;

    var renderer = createRenderer(canvas, 100, 100);
    var scene = createScene();
    var camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    var loader = new THREE.GLTFLoader();
    var model = null;
    var frameId = 0;
    var disposed = false;

    camera.position.set(0, 0, 3.4);

    loader.load(MODEL_URL, function (gltf) {
      if (disposed) {
        return;
      }
      model = gltf.scene;
      applyChromeMaterial(model);
      frameModel(model, 1.65);
      scene.add(model);
    }, undefined, function () {
      canvas.classList.add("logo-canvas-fallback");
    });

    function render() {
      if (disposed) {
        return;
      }
      if (model) {
        model.rotation.y += 0.012;
      }
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    }

    function cleanup() {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      renderer.dispose();
    }

    render();
    window.addEventListener("pagehide", cleanup, { once: true });
  }

  window.NORVAIL3D = {
    modelUrl: MODEL_URL,
    applyChromeMaterial: applyChromeMaterial,
    frameModel: frameModel,
    createRenderer: createRenderer,
    createScene: createScene
  };

  document.addEventListener("DOMContentLoaded", initHeaderLogo, { once: true });
})();
