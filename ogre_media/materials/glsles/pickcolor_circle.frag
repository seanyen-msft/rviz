#version 300 es
precision highp float;
in vec4 oTexcoord4_0;

// Draws a circle in the pick color 

//includes:
void circleImpl( vec4 color, float ax, float ay );

uniform vec4 pick_color;

void main()
{
  circleImpl( pick_color, oTexcoord4_0.x-0.5, oTexcoord4_0.y-0.5 );
}
