import React, { Component } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // In production, send to your monitoring service (e.g. Sentry, Datadog)
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary caught error]:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          background: '#f8fafc',
          color: '#1e293b',
          fontFamily: 'Outfit, Inter, sans-serif'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#fee2e2',
            color: '#dc2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem',
            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.12)'
          }}>
            <AlertTriangle size={32} />
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>
            Something went wrong
          </h2>
          <p style={{ maxWidth: '460px', color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.75rem' }}>
            We encountered an unexpected issue while rendering this page. You can reload the page or return safely to the home page.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={this.handleReload}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                borderRadius: '8px',
                background: '#0284c7',
                color: '#ffffff',
                border: 'none',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
            >
              <RefreshCw size={16} />
              Reload Page
            </button>

            <button
              onClick={this.handleReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                borderRadius: '8px',
                background: '#ffffff',
                color: '#334155',
                border: '1px solid #cbd5e1',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
            >
              <Home size={16} />
              Go to Home
            </button>
          </div>

          {import.meta.env.DEV && this.state.error && (
            <details style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '640px', width: '100%' }}>
              <summary style={{ cursor: 'pointer', color: '#64748b', fontSize: '0.85rem' }}>
                Error Details (Developer Mode)
              </summary>
              <pre style={{
                marginTop: '0.5rem',
                padding: '1rem',
                background: '#0f172a',
                color: '#f87171',
                borderRadius: '6px',
                fontSize: '0.8rem',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap'
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
