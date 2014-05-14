<?php

namespace Exploot\Front\WebsiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function IndexAction()
    {
    	return $this->render('ExplootFrontWebsiteBundle:Home:Index.html.twig');
    }

}
