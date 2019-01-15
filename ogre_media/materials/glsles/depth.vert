#version 300 es
//#define gl_Position oPos
out highp vec4 gl_Position;
in vec4 vertex;

// Minimal depth passthrough shader

uniform mat4 worldviewproj_matrix;

void passDepth( vec4 pos );

void main() {
    gl_Position = worldviewproj_matrix * vertex;
    passDepth( vertex );
}
