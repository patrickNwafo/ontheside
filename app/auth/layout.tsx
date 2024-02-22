const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 to-pink-100">
            {children}
        </div>
    );
};

export default AuthLayout;
