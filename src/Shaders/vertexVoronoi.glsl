varying vec3 pos;

void main(){
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position ,1.0);
}