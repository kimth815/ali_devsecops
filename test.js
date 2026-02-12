# 테스트용 취약 코드 예시 (Python)
def login(password):
    if password == "123456":  # CodeQL이 이 하드코딩된 비밀번호를 잡아내야 합니다.
        print("Logged in!")
