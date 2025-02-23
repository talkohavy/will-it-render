import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    // @ts-ignore
    return this.props.children;
  }
}
