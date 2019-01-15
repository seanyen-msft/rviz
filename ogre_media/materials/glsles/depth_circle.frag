#version 300 es
precision highp float;
in vec4 oTexcoord4_0;

// Draws a circle with the packed depth value 

// includes
vec4 packDepth( );
void circleImpl( vec4 color, float ax, float ay );

void main()
{
  circleImpl( packDepth(), oTexcoord4_0.x-0.5, oTexcoord4_0.y-0.5 );
}
