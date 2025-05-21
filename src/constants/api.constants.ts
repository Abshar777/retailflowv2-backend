export const statusCodes={
    OK:200,
    CREATED:201,
    BAD_REQUEST:400,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    NOT_FOUND:404,
    INTERNAL_SERVER_ERROR:500,
}

export const messages={
    USER_NOT_FOUND:"User not found",
    INVALID_PASSWORD:"Invalid password",
    USER_ALREADY_EXISTS:"User already exists",
    USER_NOT_VERIFIED:"User not verified",
    INTERNAL_SERVER_ERROR:"Internal server error",
    NOT_FOUND:"Not found",
    FORBIDDEN: "Forbidden",
    UNAUTHORIZED: "Unauthorized",
    CREATED: "Created",
    UPDATED: "Updated",
    DELETED: "Deleted",
    NOT_ALLOWED: "Not allowed",
    BAD_REQUEST: "Bad request",
    GET_SUCCESS: "Get successful",
    CREDENTIALS_REQUIRED: "Credentials required",
    LOGIN_SUCCESS: "Login successful",
}



export const apiRoutes={
    AUTH:"/api/auth",
    PRODUCT:"/api/products",
    CART:"/api/cart",
    ORDER:"/api/orders",
    DELIVERY_BOY:"/api/delivery-boy",
    ADMIN:"/api/admin",
    NOTIFICATION:"/api/notifications",
}
