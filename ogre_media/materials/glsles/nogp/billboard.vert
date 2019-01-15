#version 300 es
//#define gl_Position oPosition
out highp vec4 gl_Position;
in vec4 vertex;
in vec4 uv0;
in vec4 colour;
out vec4 oTexcoord4_0;
out vec4 oColour;

// Computes the position of a billboard vertex so
// the resulting quad will face the camera.
// Texture coords are used to determine which corner
// of the billboard we compute.

uniform mat4 worldviewproj_matrix;
uniform vec4 camera_pos;
uniform vec4 size;
uniform vec4 auto_size;

#ifdef WITH_DEPTH
  //include:
  void passDepth( vec4 pos );
#endif

void main()
{
  vec3 at = camera_pos.xyz - vertex.xyz;
  at = normalize(at);
  vec3 right = cross(vec3( 0.0, 1.0, 0.0 ), at);
  vec3 up = cross(at, right);
  right = normalize(right);
  up = normalize(up);

  // if auto_size == 1, then size_factor == size*vertex.z
  // if auto_size == 0, then size_factor == size
  vec4 size_factor = (1.0-auto_size.x+(auto_size.x*vertex.z))*size;

  vec4 s = uv0 * (size_factor);
  vec3 r = s.xxx * right;
  vec3 u = s.yyy * up;
  
  vec4 pos = vertex + vec4( r + u, 0.0 );
  
  gl_Position = worldviewproj_matrix * pos;
  oTexcoord4_0 = uv0 + vec4(0.5,0.5,0.0,0.0);
  oColour = colour;

#ifdef WITH_DEPTH
  passDepth( pos );
#endif
}
