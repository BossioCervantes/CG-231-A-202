
    // Escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var size = 700;
    var arrowSize = 40;
    var divisions = 20;
    var origin = new THREE.Vector3( 0, 0, 0 );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var color2 = new THREE.Color( 0x333333 ); 
    var colorR = new THREE.Color( 0xAA0000 );
    var colorG = new THREE.Color( 0x00AA00 );
    var colorB = new THREE.Color( 0x0000AA );

    //Crear la Grilla
    var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

    //Flechas
    var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
    var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
    var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
        
    //Cámara
    camera.position.x = 000;
    camera.position.y = 100;
    camera.position.z = 400;
    camera.lookAt(scene.position);

    //Creación de las Figuras
    //Geometria de la piramide
    lado =30; //Valor del lado
    h =45; // ALtura de la piramide
    [v1,v2,v3,v4,v5] =[[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado],[lado/2,h,lado/2]]
    var vertices = [v1,v2,v3,v4,v5,v1,v4,v3,v5,v2];
    geomPiramide = Geometria(vertices);
    var largoVertice = vertices.length;

    // Colores para las piramides
    
    color = [{color:0x00FFFF}];
    //material para las piramides
    material = [];
    for(i=0;i<1;i++){
        material.push(new THREE.ParticleBasicMaterial(color[i]));
    }

    //Figuras para las piramides
    piramide = [];
    for(i=0;i<1;i++){
        piramide.push(new THREE.Line(geomPiramide, material[i]));
    }

    // En el documento HTML
    document.body.appendChild(renderer.domElement);

    // Traslaciones

    piramide[0].applyMatrix(Traslacion([2*lado,2*lado,0]))

    // Escalado

    EscaladoReal(piramide[0],[2*lado,2*lado,0], [1.5,1.5,1.5]);

    // Rotaciones

    Rotacionx(piramide[0],[2*lado,2*lado,0], 45);
    Rotaciony(piramide[0],[2*lado,2*lado,0], 45);
    Rotacionz(piramide[0],[2*lado,2*lado,0], 60); 

    // Escena

    scene.add(gridHelperXZ);
    scene.add(arrowX);
    scene.add(arrowY);
    scene.add(arrowZ);
    for  (i=0; i < 1; i++){
        scene.add(piramide[i]);
        renderer.render(scene, camera);
    }
3
