#version 300 es
precision highp float;
in vec4 oTexcoord4_0;
in vec4 colour;

// Draws a circle in the fragment color

//includes:
void circleImpl( vec4 color, float ax, float ay );

void main()
{
  circleImpl( colour, oTexcoord4_0.x-0.5, oTexcoord4_0.y-0.5 );
}
