interface BtnProps extends Omit<React.ComponentProps<'button'>, 'children'> {
    children: string;
}

function CustomBtn({ children }: BtnProps) {
    return (
        <button className="py-[12px] px-[30px] text-sm font-semibold rounded-[50px] uppercase text-white -tracking-tighter bg-[#ca1515] !important">
            {children}
        </button>
    );
}

export default CustomBtn;
