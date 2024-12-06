<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class ProfileController extends Controller
{

    // Show user profile
    public function show()
    {
        return response()->json([
            'success' => true,
            'data' => Auth::user(),
            'message' => 'User profile retrieved successfully.',
        ]);
    }

    // Update user profile
    public function update(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|unique:users,email,' . $user->id,
            'password' => 'sometimes|required|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $input = $request->only(['name', 'email', 'password']);
        if (isset($input['password'])) {
            $input['password'] = bcrypt($input['password']);
        }

        $user->update($input);

        return response()->json([
            'success' => true,
            'data' => $user,
            'message' => 'Profile updated successfully.',
        ]);
    }

    // Delete user profile
    public function destroy()
    {
        $user = Auth::user();
        $user->tokens()->delete();  // Revoke tokens
        $user->delete();  // Delete user account

        return response()->json([
            'success' => true,
            'message' => 'User account deleted successfully.',
        ]);
    }
}
