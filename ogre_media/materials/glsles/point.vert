#version 300 es
//#define gl_Position oPos
//#define gl_PointSize oPointSize
out highp vec4 gl_Position;
out highp float gl_PointSize;
in vec4 vertex;
in vec4 colour;
out vec4 oColour;

// Generic vertex shader for point sprites
// sets position and point size.
// Works for perspective and orthographic projection.

uniform mat4 worldviewproj_matrix;
uniform vec4 size;

#ifdef WITH_DEPTH
  //include:
  void passDepth( vec4 pos );
#endif

void main()
{
  gl_Position = worldviewproj_matrix * vertex;
  oColour = colour;
  gl_PointSize = size.x;

#ifdef WITH_DEPTH
  passDepth( vertex );
#endif
}
