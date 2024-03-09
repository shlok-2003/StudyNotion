import { useLocation, matchPath } from 'react-router-dom';

export const useRouteMatch = (path: string) : boolean => {
    const location = useLocation();

    return matchPath(location.pathname, path) ? true : false;
};

export default useRouteMatch;
