interface TopBarProps {
  duckReady: 'loading' | 'ready' | 'error';
}

const PORTFOLIO_URL = 'https://bganguly.github.io/#nl_to_sql';

const TopBar = ({ duckReady }: TopBarProps) => {
  const pillClass =
    duckReady === 'ready' ? 'ready' : duckReady === 'error' ? '' : 'loading';
  const pillText =
    duckReady === 'ready'
      ? 'DuckDB ready'
      : duckReady === 'error'
      ? 'DuckDB failed'
      : 'loading DuckDB...';

  function handleBack(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    try {
      if (window.opener && !window.opener.closed) {
        window.opener.location.href = PORTFOLIO_URL;
        window.close();
        return;
      }
    } catch (_) {}
    window.location.href = PORTFOLIO_URL;
  }

  return (
    <header className="topbar">
      <a className="back-link" href={PORTFOLIO_URL} onClick={handleBack}>← Portfolio</a>
      <div className="topbar-inner">
        <div>
          <h1>NL to SQL</h1>
          <p className="sub">H1B explorer · Anthropic &amp; OpenAI · DuckDB-WASM</p>
        </div>
        <div className="topbar-actions">
          <span className={`duck-pill ${pillClass}`}>{pillText}</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
