import {Scene} from './components/3d/Scene';
import {Layout} from './components/Layout';
import {useCourseStore} from './store';
import {Module0Diagnostic} from './modules/Module0Diagnostic';
import {Module1Concepts} from './modules/Module1Concepts';
import {Module2Legal} from './modules/Module2Legal';
import {Module3Risks} from './modules/Module3Risks';
import {Module4Sct} from './modules/Module4Sct';
import {Module5Operations} from './modules/Module5Operations';
import {Module6FinalExam} from './modules/Module6FinalExam';
function ModuleRouter(){const active=useCourseStore(s=>s.activeModule);switch(active){case 0:return <Module0Diagnostic/>;case 1:return <Module1Concepts/>;case 2:return <Module2Legal/>;case 3:return <Module3Risks/>;case 4:return <Module4Sct/>;case 5:return <Module5Operations/>;case 6:return <Module6FinalExam/>;default:return <Module0Diagnostic/>}}
export default function App(){const active=useCourseStore(s=>s.activeModule);const mode=active===4?'truck':'diamond';return <Layout><div className="relative h-full"><div className="pointer-events-none absolute inset-0 opacity-20"><Scene mode={mode}/></div><div className="relative z-10 h-full"><ModuleRouter/></div></div></Layout>}
