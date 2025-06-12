# Auth endpoints (login/signup) for Buildzy backend
from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/login")
def login():
    # Implement login logic
    data = request.json
    username = data['username']
    password = data['password']

    print(f"Login attempt: username={username}, password={password}")

    if validate_user(username, password):
        print("✅ Login successful")
        return jsonify({'login': True})
    
    print("❌ Login failed")
    return jsonify({'login': False})

@router.post("/signup")
def signup():
    # Implement signup logic
    data = request.json
    username = data['username']
    password = data['password']

    if check_user_exists(username):
        return jsonify({'success': False, 'message': 'User already exists'})
    
    save_user_credentials(username, password)
    return jsonify({'success': True, 'message': 'User registered successfully'})
