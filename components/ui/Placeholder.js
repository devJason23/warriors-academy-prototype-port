export default function Placeholder({ label, className = '', style = {}, note }) {
  return (
    <div className={`placeholder ${className}`} style={style}>
      <div style={{ position: 'absolute', top: 16, left: 16 }}>
        <span className="placeholder-label">{label}</span>
      </div>
      {note && (
        <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
          <span className="mono" style={{ color: 'rgba(245,242,236,0.5)', fontSize: 10 }}>// {note}</span>
        </div>
      )}
    </div>
  )
}
