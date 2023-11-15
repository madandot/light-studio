interface props {
   children: React.ReactNode;
   className?: string;
}

const Container = ({ children, className }: props) => {
   return <div className={`${className} `}>{children}</div>;
};

export default Container;
