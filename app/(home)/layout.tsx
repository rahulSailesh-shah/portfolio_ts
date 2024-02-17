interface Props {
    children?: React.ReactNode;
}
const HomeLayout = ({ children }: Props) => {
    return (
        <div>
            <div>{/* <Navbar /> */}</div>
            <div>{children}</div>
        </div>
    );
};

export default HomeLayout;
