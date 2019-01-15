#version 300 es
//#define gl_Position oPosition
out highp vec4 gl_Position;

// Computes the position of a billboard vertex so
// the resulting quad will face a given direction given by up & normal.
// Texture coords are used to determine which corner
// of the billboard we compute.

uniform mat4 worldviewproj_matrix;
uniform vec4 size;
uniform vec4 normal;
uniform vec4 up;

in vec4 vertex;
in vec4 uv0;
in vec4 colour;
out vec4 oTexcoord4_0;
out vec4 oColour;

#ifdef WITH_DEPTH
//include:
void passDepth( vec4 pos );
#endif

void main()
{
  vec3 right = cross(up.xyz, normal.xyz);
  
  vec4 s = uv0 * size;
  vec3 r = s.xxx * right;
  vec3 u = s.yyy * up.xyz;
  
  vec4 pos = vertex + vec4( r + u, 0.0 );
  
  gl_Position = worldviewproj_matrix * pos;
  oTexcoord4_0 = uv0 + vec4(0.5,0.5,0.0,0.0);
  oColour = colour;

#ifdef WITH_DEPTH
  passDepth( pos );
#endif
}
