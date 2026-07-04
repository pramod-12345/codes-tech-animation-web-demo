const Card = ({ className = 'p-3 sm:p-4 md:p-6 lg:p-7 xl:p-8 space-y-[18px]', children }) => {
    return (
        <div className={`bg-slate-50 dark:bg-brand-code border border-slate-200 dark:border-white/15 rounded-[24px] transition-colors duration-300 ${className}`}>
            {children}
        </div>
    )
}

export default Card