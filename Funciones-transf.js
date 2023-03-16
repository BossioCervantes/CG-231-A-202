function Geometria(vx){
    geom = new THREE.Geometry();
    var largoVertice = vx.length;
    for (i=0; i<largoVertice; i++) {
        x = vx[i][0];
        y = vx[i][1];
        z = vx[i][2];
        vector = new THREE.Vector3(x,y,z);
        geom.vertices.push(vector);
    }
    return geom;
}

// Funcion de Traslación

function Traslacion(vt) {
    var matrizT= new THREE.Matrix4();
    // Matriz de Traslación
    matrizT.set(
        1,0,0,vt[0],
        0,1,0,vt[1],
        0,0,1,vt[2],
        0,0,0,1
    );
    return matrizT;
}

// Funcion de Escalado

function Escalado(vs) {

    var matrizS = new THREE.Matrix4();
    // Matriz de Escalado
    matrizS.set (
        vs[0],0,0,0,
        0,vs[1],0,0,
        0,0,vs[2],0,
        0,0,0,1
    );
    return matrizS; 
}

// Se hacen 3 funciones de rotación para cada eje

// Funcion de Rotación en X

function RotacionX(rt) {
    var matrizX = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];
    // Matriz de Rotación en X
    matrizX.set
    (1,0,0,0,
    0,cs,-sn,0,
    0,sn,cs,0,
    0,0,0,1);
    return matrizX;      
}

// Funcion de Rotación en Y

function RotacionY(rt) {
    var matrizY = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];
    // Matriz de Rotación en Y
    matrizY.set
    (cs,0,sn,0,
    0,1,0,0,
    -sn,0,cs,0,
    0,0,0,1);
    return matrizY;      
}

// Funcion de Rotación en Z

function RotacionZ(rt) {
    var matrizZ = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];
    // Matriz de Rotación en Z
    matrizZ.set
    (cs,-sn,0,0,
    sn,cs,0,0,
    0,0,1,0,
    0,0,0,1);
    return matrizZ;      
}


function EscaladoReal(fig,posini,vs) {
     //Vector para llevar al origen
    tr = [-posini[0], -posini[1], -posini[2]];  // Se pone la posición inicial en negativo para volver al origen
    fig.applyMatrix(Traslacion(tr)); // Traslación al origen
    fig.applyMatrix(Escalado(vs)); // Se realiza el escalado
    fig.applyMatrix(Traslacion(posini)); // Se devuelve a la posición original
}
// Rotacionx: Funcion para aplicar una rotación en el Eje X solamente
function Rotacionx(fig,posini,rt) {
   tr = [-posini[0], -posini[1], -posini[2]]; // Se pone la posición inicial en negativo para volver al origen
   fig.applyMatrix(Traslacion(tr)); // Traslación al origen
   fig.applyMatrix(RotacionX(rt)); // Rotación en el Eje X
   fig.applyMatrix(Traslacion(posini)); // Se devuelve a la posición original
}
// Rotaciony: Funcion para aplicar una rotación en el Eje Y solamente
function Rotaciony(fig,posini,rt) {
   tr = [-posini[0], -posini[1], -posini[2]]; // Se pone la posición inicial en negativo para volver al origen
   fig.applyMatrix(Traslacion(tr)); // Traslación al origen
   fig.applyMatrix(RotacionY(rt)); // Rotación en el Eje Y
   fig.applyMatrix(Traslacion(posini)); // Se devuelve a la posición original
}
// Rotacionz: Funcion para aplicar una rotación en el Eje Z solamente
function Rotacionz(fig,posini,rt) {
   tr = [-posini[0], -posini[1], -posini[2]]; // Se pone la posición inicial en negativo para volver al origen
   fig.applyMatrix(Traslacion(tr)); // Traslación al origen
   fig.applyMatrix(RotacionZ(rt)); // Rotación en el Eje Z
   fig.applyMatrix(Traslacion(posini)); // Se devuelve a la posición original
}
