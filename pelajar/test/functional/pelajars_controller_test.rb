require 'test_helper'

class PelajarsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pelajars)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pelajar" do
    assert_difference('Pelajar.count') do
      post :create, :pelajar => { }
    end

    assert_redirected_to pelajar_path(assigns(:pelajar))
  end

  test "should show pelajar" do
    get :show, :id => pelajars(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => pelajars(:one).to_param
    assert_response :success
  end

  test "should update pelajar" do
    put :update, :id => pelajars(:one).to_param, :pelajar => { }
    assert_redirected_to pelajar_path(assigns(:pelajar))
  end

  test "should destroy pelajar" do
    assert_difference('Pelajar.count', -1) do
      delete :destroy, :id => pelajars(:one).to_param
    end

    assert_redirected_to pelajars_path
  end
end
