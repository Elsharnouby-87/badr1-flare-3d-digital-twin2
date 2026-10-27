import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd(),port=Number(process.env.PORT||5173);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.css':'text/css; charset=utf-8','.md':'text/plain; charset=utf-8','.png':'image/png'};
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost'); const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!filename.startsWith(root+path.sep)){res.writeHead(403).end('Forbidden');return;}const data=await readFile(filename);res.writeHead(200,{'Content-Type':mime[path.extname(filename)]||'application/octet-stream'}).end(data);}catch(e){res.writeHead(404).end('Not found')}}).listen(port,()=>console.log('BADR-1 Viewer on http://localhost:'+port));
