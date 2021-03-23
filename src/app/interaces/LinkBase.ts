import { LinkTemplate } from './LinkTemplate';

export const LINKS: LinkTemplate[] = [
{
    LinkName: 'PiMonitor',
    LinkAdress: 'http://pimonitor.pl/admin/',
    LinkIcon:'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Pi-hole_vector_logo.svg/1200px-Pi-hole_vector_logo.svg.png',
},
{
    LinkName: 'Grafana',
    LinkAdress: 'http://pimonitor.pl:3000/login',
    LinkIcon: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Grafana_logo.svg'
},
{
    LinkName: 'WebAdmin',
    LinkAdress: 'https://192.168.20.2:10000/',
    LinkIcon: ''
},
{
    LinkName: 'PiVpnGUI',
    LinkAdress: 'http://pimonitor.pl/pivpn-gui/',
    LinkIcon: ''
},

]