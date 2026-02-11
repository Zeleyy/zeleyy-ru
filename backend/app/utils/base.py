from datetime import datetime, timedelta

def validate_date(date_str: str, max_age_hours: int) -> bool:
    return datetime.now() - datetime.fromisoformat(date_str) > timedelta(hours=max_age_hours)
