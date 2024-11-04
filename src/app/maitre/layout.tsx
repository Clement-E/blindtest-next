import AddPlayer from '@/src/app/ui/AddPlayer/AddPlayer'

export default function Layout({children}: { children: React.ReactNode }) {
    return (
    <>
        {children}
        <AddPlayer />
    </>
    
    )
}