import type {PropsWithChildren} from 'react';
export function GlassCard({children,className=''}:PropsWithChildren<{className?:string}>){return <div className={`glass rounded-2xl ${className}`}>{children}</div>}
