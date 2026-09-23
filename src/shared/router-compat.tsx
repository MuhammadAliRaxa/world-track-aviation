'use client';

import React from 'react';
import NextLink from 'next/link';
import { useRouter, usePathname, useParams as useNextParams } from 'next/navigation';

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === 'number') {
      if (to === -1) router.back();
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname: pathname || '/', search: '', hash: '', state: null, key: 'default' };
}

export function useParams<T extends Record<string, string | string[] | undefined> = Record<string, string>>() {
  const params = useNextParams();
  return (params || {}) as T;
}

export function Link({ to, href, children, className, style, onClick, title, ...rest }: any) {
  const destination = href || to || '/';
  return (
    <NextLink
      href={destination}
      className={className}
      style={style}
      onClick={onClick}
      title={title}
      {...rest}
    >
      {children}
    </NextLink>
  );
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router]);
  return null;
}
