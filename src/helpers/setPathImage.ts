export const setPathImage = (path: string = ""): string => {
    if(process.env.REACT_APP_API_URL_IMAGES){
        return `${process.env.REACT_APP_API_URL_IMAGES}${path}`;
    }

    return path;
    

};

