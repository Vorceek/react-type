
interface IHeaderH1 {
    children: React.ReactNode;
}

const HeaderH1 = (obj: IHeaderH1) => {
    return <h1 className='cursor-pointer'>{obj.children}</h1>
}

export const Header = () => {
    return (
        <div className="w-screen h-16  bg-[#13111C] text-white mb-8">
            <div className='flex'>
                <div className='w-screen '>
                    <div className='flex h-16 gap-30 justify-center p-4'>
                        <HeaderH1>Contato</HeaderH1>
                        <HeaderH1>Header</HeaderH1>
                        <HeaderH1>Header</HeaderH1>
                        <HeaderH1>Header</HeaderH1>
                        <HeaderH1>Header</HeaderH1>
                    </div>
                </div>
            </div>
        </div>
    )
}