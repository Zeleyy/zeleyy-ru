class AppException(Exception):
    pass

class CacheExpiredError(AppException):
    pass
