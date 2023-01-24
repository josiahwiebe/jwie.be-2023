export default function PageHeader({ title, subtitle }) {
  return (
    <header className='page-header'>
      <h1 className='text-2xl font-heading font-bold dark:text-slate-300'>{title}</h1>
      {subtitle && <p className='text-slate-700 dark:text-slate-600 text-md'>{subtitle}</p>}
    </header>
  )
}
