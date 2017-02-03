$(function(){
	//header
	(function(){
		var  $shop = $('.h_m_r_shop');
		var $hide = $('.h_m_r_s_hide');
		$shop.hover(function() {
			$(this).addClass('hover');
			$hide.stop().slideDown('fast');
		}, function() {
			$(this).removeClass('hover');
			$hide.stop().slideUp('fast');
		});
	})();

	//nav
	(function(){
		var $search = $('.n_search');
		// var $s_right = $('.n_s_right');

		$search.hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
		$('.n_s_right').hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
		$('.n_s_left input').focus(function() {
			$search.addClass('focus');
			$('.n_s_l_tip').fadeOut(200);
			$('.n_s_l_down').show();
		}).blur(function() {
			$search.removeClass('focus');
			$('.n_s_l_tip').fadeIn(200);
			$('.n_s_l_down').hide();
		});
		$('.n_main ul li').hover(function() {
			$('.nav_down').stop().slideDown(300);
		}, function() {
			$('.nav_down').stop().slideUp(300);
		});
		$('.nav_down').hover(function() {
			$(this).stop().show();
		}, function() {
			$(this).stop().slideUp(300);
		});
		$('.n_main ul li').hover(function() {
			var index = $(this).index();
			$('.nav_d_main ul').eq(index).show().siblings().hide();
		});
	})();

	//banner
	(function(){
		var $ulLi = $('.b_m_ul ul li');
		var $picLi = $('.b_m_pic ul li');
		var index = 0;
		var $Button = $('.b_m_button');
		var length = $ulLi.length;
		var timer;
		//底部圆点
		$ulLi.hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
		$ulLi.click(function() {
			index = $(this).index();
			banner();
		});
		$Button.click(function(){
			var i  =$(this).index();
			if (i) {
				index ++;
				index %= length;
			}
			else
			{
				index --;
				if(index<0)index=length-1;
			}
			banner();
		});
		auto();
		$('.b_m_pic').hover(function(){
			clearInterval( timer )
		},function(){
			auto();
		});
		function banner(){
			$ulLi.eq(index).addClass('click').siblings().removeClass('click');
			$picLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
		}
		function auto(){
			timer = setInterval(function(){
				index++;
				index%=length;
				banner();
			},3000);
		}
		//banner左边hover显示右边菜单
		$('.b_n_l_wrap li').hover(function() {
			$('.b_n_right').show();
		}, function() {
			linum = $(this).index();
			$('.b_n_right').hide();
		});
		$('.b_n_right').hover(function() {
			$('.b_n_right').show();
		}, function() {
			$('.b_n_right').hide();
		});
		
	})();
	//star
	(function(){
		//定义变量
		var  $button = $('.s_t_button>div');
		var $ul = $('.s_c_content');
		var  margin = $('.s_c_content .li5').position().left;
		var Timer;
		//右按钮明暗显示
		function toggle() {
			$button.toggleClass('click');
		};
		var buttonJude = true;
		//点击切换内容
		$button.click(function() {
			if ( buttonJude ) 
			{
				toggle();
				$ul.stop().animate({
					marginLeft : '-1226px'
				}, 500);
				buttonJude = false;
				clearInterval(Timer);
				auto();
			}
			else 
			{
				toggle();
				$ul.stop().animate({
					marginLeft : '0px'
				}, 500);
				buttonJude = true;
				clearInterval(Timer);
				auto();
			}
		});
		//button hover效果
		$button.hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
		//实现自动轮播
		auto();
		// 
		function auto(){
			Timer = setInterval(function(){
				if (buttonJude)
				{
					toggle();
					$ul.stop().animate({
					marginLeft : '-1226px'
					}, 500);
					buttonJude = false;
				}
				else 
				{
					toggle();
					$ul.stop().animate({
						marginLeft : '0px'
					}, 500);
					buttonJude = true;
				}
			},6000);
		};

	})();
	//智能硬件
	//箭头hover变色
	(function(){
		$('.b_s_t_right a').hover(function() {
			$(this).addClass('hover');
			$('.b_s_t_right a i').addClass('hover');
		}, function() {
			$(this).removeClass('hover');
			$('.b_s_t_right a i').removeClass('hover');
		});
	})();
	//搭配
	(function(){
		var $dtul = $('.d_t_ul li');
		$dtul.hover(function() {
			$(this).addClass('hover');
			$(this).siblings().removeClass('hover');
		});
	})();
});

