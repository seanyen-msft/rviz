#version 300 es
precision highp float;
out highp vec4 fragColor;

// Passes on the packed depth value

// includes
vec4 packDepth( );

void main()
{
  fragColor = packDepth();
}
