#version 300 es
precision highp float;
out highp vec4 fragColor;

// Passes the vertex pick color 

uniform vec4 pick_color;

void main()
{
  fragColor = pick_color;
}
