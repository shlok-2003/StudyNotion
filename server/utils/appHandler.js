class AppError extends Error {
    constructor(success, statusCode, error, message) {
        super();

        this.success = success;
        this.error = error;
        this.statusCode = statusCode;
        this.message = message || 'None';
        
        Error.captureStackTrace(this, this.constructor);
    }
}

const AppSuccess = (success, message, data) => {
    const allData = {};

    if (data) {
        for (const key of Object.keys(data)) {
            allData[key] = data[key];
        }
    }

    return {
        success: success,
        message: message,
        data: allData,
    };
};

export { AppError, AppSuccess };
