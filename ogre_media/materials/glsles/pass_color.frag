#version 300 es
precision highp float;
in vec4 colour;
out vec4 oColour;

// Passes the fragment color unchanged 

void main()
{
  oColour = colour;
}
