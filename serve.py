import http.server
import socketserver
import os

PORT = 3000
DIRECTORY = r"c:\Users\Khalifat\Desktop\Antigravity Projects\Trescon_Corporate_Profile"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving HTTP on port {PORT} (http://localhost:{PORT}/letterhead.html)...")
        httpd.serve_forever()
