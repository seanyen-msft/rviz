#version 300 es
//#define gl_Position oPosition
out highp vec4 gl_Position;

// Draws an 8-bit image using RGB values from a 256x1 palette texture.
// This vertex shader just passes through the UV texture coordinates.
// I'm not sure if it is necessary or not.

uniform	mat4	worldviewproj_matrix;

in vec4 vertex;
in vec4 uv0;
out vec2 UV;

void main()
{
  gl_Position = worldviewproj_matrix * vertex;
  UV = vec2(uv0);
}
